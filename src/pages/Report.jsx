import { useState } from "react";

export function Report() {
  const [img, setImg] = useState(null);

  console.log(img);

  const changeImg = (e) => {
    let reader = new FileReader();

    reader.onload = (e) => {
        setImg(e.target.result);
    }

    reader.readAsDataURL(e);
  }

  return (
    <div>
      <h1>Report</h1>
      <form action="">
        <input type="file" onChange={(e) => changeImg(e.target.files[0])} />
        {
            img && <img src={img} alt="img" />
        }
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
