import { useImageUpload } from "@/hook/useImageUpload";
import { useForm, Controller } from "react-hook-form";

export default function ImageUploadComponent() {
  const { fileInputRef, progress, uploadedUrl, handleUpload,  } = useImageUpload();
  const { control } = useForm();

  return (
    <div className="text-black">
      <Controller
        name="images"
        control={control}
        render={({ field }) => (
          <input
            type="file"
            ref={(e) => {
              field.ref(e);          
              fileInputRef.current = e; 
            }}
            onChange={(e) => field.onChange(e.target.files)}
            multiple
          />
        )}
      />
      <button className="text-black" onClick={handleUpload}>Upload</button>
      <div>
        Progress: <progress value={progress} max={100} className="text-black"></progress>
      </div>
      {uploadedUrl && <img src={uploadedUrl} alt="Uploaded" className="w-40 mt-2" />}
    </div>
  );
}
