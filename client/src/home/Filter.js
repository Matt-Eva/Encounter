import React from 'react'

function Filter({selected, setSelected}) {
    return (
        <form onChange={(e) => setSelected(e.target.value)}>
            <input type="radio" id="all" value="all" checked={selected === "all" ? true : false}/>
            <label for="all" style={{"padding": "2px", "marginRight": "2px"}}>All</label>
            <input type="radio" id="active" value="active" checked={selected === "active" ? true : false}/>
            <label for="active" style={{"padding": "2px", "marginRight": "2px"}}>Active</label>
            <input type="radio" id="archived" value="archived" checked={selected === "archived" ? true : false}/>
            <label for="archived" style={{"padding": "2px", "marginRight": "2px"}}>Archived</label>
        </form>
    )
}

export default Filter
