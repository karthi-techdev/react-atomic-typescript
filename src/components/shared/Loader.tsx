import { ClipLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <ClipLoader color="#3B82F6" loading={true} size={50} aria-label="Loading Spinner" data-testid="loader"/>
    </div>
  );
};

export default Loader;
