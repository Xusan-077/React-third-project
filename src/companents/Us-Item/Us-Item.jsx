export default function UsItem(props){
    return (
        <li>
            <img src={props.img} alt="" className="mb-[40px] w-[260px] h-[220px]" />
            <h4 className="text-[20px] text-[#23262D] font-[600] max-w-[312px] text-center">{props.subtitle}</h4>
        </li>
    )
}