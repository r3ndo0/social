

export default function News({title, url}) {
  return (
    <div className="my-5 p-2 ">
        <a href={url} >{title}</a>
    </div>
  )
}

