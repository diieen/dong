import { useState, useEffect, useRef } from "react";

export function Report() {
  const [img, setImg] = useState(null);
  let videoRef = useRef(null);
  // let photoRef = useRef(null)

  const changeImg = (e) => {
    let reader = new FileReader();

    reader.onload = (e) => {
        setImg(e.target.result);
    }

    reader.readAsDataURL(e);
  }

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: true
      })
      .then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  return (
    <div>
      <h1>Report</h1>
      <form action="">
        <video ref={videoRef} className="container"></video>
        <input type="file" onChange={(e) => changeImg(e.target.files[0])} />
        {
            img && <img src={img} alt="img" />
        }
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
