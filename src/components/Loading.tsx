import BeatLoader from "react-spinners/BeatLoader";

export default function Loading () {

  return (
    <div style={{height:'80vh', display:'flex', alignItems:'center', justifyContent:'center'}}>

        <BeatLoader
          color="#333"
          speedMultiplier={1}
        />
    </div>
  );
}

