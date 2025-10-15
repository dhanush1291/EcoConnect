import { PhotoUpload } from "../PhotoUpload";

export default function PhotoUploadExample() {
  return (
    <div className="p-4 max-w-md">
      <PhotoUpload onPhotosChange={(photos) => console.log("Photos:", photos)} />
    </div>
  );
}
