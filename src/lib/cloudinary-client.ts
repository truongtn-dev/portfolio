export interface CloudinaryUploadResponse {
  secure_url: string;
  public_id: string;
  format: string;
  width: number;
  height: number;
  bytes: number;
}

/**
 * Client-side helper to upload image directly to Cloudinary via unsigned preset
 */
export async function uploadImageToCloudinary(
  file: File,
  folder: string = "portfolio"
): Promise<CloudinaryUploadResponse> {
  const cloudName =
    process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "domvpkjum";
  const uploadPreset =
    process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || "orcax_visi";

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);
  formData.append("folder", folder);

  const endpoint = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

  const response = await fetch(endpoint, {
    method: "POST",
    body: formData
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData?.error?.message || `Upload failed with status ${response.status}`
    );
  }

  const result = await response.json();
  return {
    secure_url: result.secure_url,
    public_id: result.public_id,
    format: result.format,
    width: result.width,
    height: result.height,
    bytes: result.bytes
  };
}

/**
 * Utility to generate an optimized Cloudinary delivery URL with transformations
 */
export function getOptimizedImageUrl(
  urlOrPublicId: string,
  options?: {
    width?: number;
    height?: number;
    crop?: "fill" | "thumb" | "fit" | "scale";
    quality?: "auto" | number;
    format?: "auto" | "webp" | "avif";
  }
): string {
  if (!urlOrPublicId) return "";

  // If already full cloudinary url, inject params
  if (urlOrPublicId.includes("res.cloudinary.com")) {
    const parts = urlOrPublicId.split("/upload/");
    if (parts.length === 2) {
      const transformations = [
        options?.crop ? `c_${options.crop}` : "c_fill",
        options?.width ? `w_${options.width}` : "",
        options?.height ? `h_${options.height}` : "",
        `q_${options?.quality || "auto"}`,
        `f_${options?.format || "auto"}`
      ]
        .filter(Boolean)
        .join(",");

      return `${parts[0]}/upload/${transformations}/${parts[1]}`;
    }
    return urlOrPublicId;
  }

  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "domvpkjum";
  const transformations = [
    options?.crop ? `c_${options.crop}` : "c_fill",
    options?.width ? `w_${options.width}` : "",
    options?.height ? `h_${options.height}` : "",
    `q_${options?.quality || "auto"}`,
    `f_${options?.format || "auto"}`
  ]
    .filter(Boolean)
    .join(",");

  return `https://res.cloudinary.com/${cloudName}/image/upload/${transformations}/${urlOrPublicId}`;
}
