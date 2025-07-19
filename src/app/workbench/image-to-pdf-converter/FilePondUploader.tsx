import { useEffect, useState } from "react";
import { FilePond } from "react-filepond";
import type { FilePondFile } from "filepond";
import { registerPlugin } from "filepond";

import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";

import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

registerPlugin(FilePondPluginImagePreview, FilePondPluginFileValidateType);

export interface UploadedImage {
  name: string;
  dataUrl: string;
}

interface Props {
  onImagesChange: (images: UploadedImage[]) => void;
}

export default function FilePondUploader({ onImagesChange }: Props) {
  const [pondFiles, setPondFiles] = useState<FilePondFile[]>([]);

  useEffect(() => {
    const convertToDataUrls = async () => {
      const dataUrls = await Promise.all(
        pondFiles.map((fileItem) => {
          const file = fileItem.file;
          return new Promise<UploadedImage>((resolve) => {
            const reader = new FileReader();
            reader.onload = () =>
              resolve({
                name: file.name,
                dataUrl: reader.result as string,
              });
            reader.readAsDataURL(file);
          });
        }),
      );
      onImagesChange(dataUrls);
    };

    if (pondFiles.length > 0) convertToDataUrls();
    else onImagesChange([]);
  }, [pondFiles, onImagesChange]);

  return (
    <div className="mb-6">
      <FilePond
        onupdatefiles={setPondFiles}
        allowMultiple
        allowReorder
        itemInsertLocation="after"
        acceptedFileTypes={["image/*"]}
        labelIdle='Drag & Drop your images or <span class="filepond--label-action">Browse</span>'
        credits={false}
      />
    </div>
  );
}
