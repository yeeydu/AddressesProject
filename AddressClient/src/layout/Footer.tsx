 

export default function Footer() {

  const date = new Date(); 
  const year = date.getFullYear();

  return (
    <div className=" fixed-bottom text-center bg-light py-3  ">
      <div className="">&copy; Copyrights {year} | Yeeyson</div>
    </div>
  );
}
