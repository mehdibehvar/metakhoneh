import Image from "next/image";

export default function Loading() {
  return (
    <div style={{width:"50px",height:"50px",display:"inline-block"}}>
        <Image
        src={"/cargando-loading.gif"}
        alt="loading"
        width={50}
        height={50}
        layout="responsive"
        />
    </div>
  )
}
