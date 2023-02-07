import './SearchContainer.css'

export default function SearchContainer () {
    return (
        <div className="search-container">
        <input className="input-search" type="text" placeholder="Github Username..." />
        <button className="button-search">Search</button>
    </div>
    )
}