export const Button = ({type="button", children, href, className, onClick})=>{
  return(
    <a href={href} className={`btn`} onClick={onClick}>{children}</a>
  )
}