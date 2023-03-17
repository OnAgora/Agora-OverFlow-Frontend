export default function TitleBar({
    caption, title, className=''
}) {
  return (
    <div className={className}>
        <span className='text-[#0f0e36] opacity-25'>{caption}</span>
        <h2 className='text-[2.5rem] w-[24rem] font-bold'>{title}</h2>
    </div>
  )
}
