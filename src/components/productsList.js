export default function ProductsList({list}) {
    const items = list.map((element) => <li>
        <h2>{element.name}</h2>
        <h4>{element.description}</h4>
        <button>{element.id}</button>
    </li>);
    
    return (
        <ul>{items}</ul>
    )
}