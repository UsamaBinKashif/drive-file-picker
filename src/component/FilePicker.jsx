import { useEffect } from "react";
import useDrivePicker from "react-google-drive-picker";

function Picker() {
  const [openPicker, data, authResponse] = useDrivePicker();
  const handleOpenPicker = () => {
    openPicker({
      clientId:
        "1080163201988-3t87jlifmmtvsp6h00c18mrq528jaoh1.apps.googleusercontent.com",
      developerKey: "AIzaSyAxOxV55535Apm25hugUhV4xrTPIMouyIY",
      viewId: "DOCS",
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: true,
      callbackFunction: (data) => {
        if (data.action === 'cancel') {
          console.log('User clicked cancel/close button')
        }
        console.log(data.docs)
      },
    });
  };

  useEffect(() => {
    if (data) {
      console.log(data)
    }
  }, [data]);
  return (
    <div >
      <button  className="bg-green-500 p-3" onClick={() => handleOpenPicker()}>Open Picker</button>
    </div>
  );
}

export default Picker;
