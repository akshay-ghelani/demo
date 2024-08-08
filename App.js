import * as React from 'react';


const App = () => {
  const story = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];
  const[searchTerm, setSearchTerm]=React.useState( localStorage.getItem('saerch') || 'React');
   

  const handlesearch = (event) =>{
    setSearchTerm(event.target.value)
    localStorage.setItem('search',event.target.value);
  }
  const searchstory = story.filter(function(stotyitem){
    return stotyitem.title.includes(searchTerm);
  });
  

  return(
    <div>
    <h1>My Hacker Stories</h1>

    <Search  search={searchTerm} onSearch={handlesearch} />

    <hr />

    <List list={searchstory} />
  </div>
  );
}

const Search = (props) => {
  const {onSearch,search}=props;


  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={onSearch} value={search} />
    </div>
  );
};

const List = (props) => (
  <ul>
    {props.list.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
   
  </ul>
   );
  const Item =(props) => (
    <li>
        <span>
          <a href={props.item.url}>{props.item.title}</a>
        </span>
        <span>{props.item.author}</span>
        <span>{props.item.num_comments}</span>
        <span>{props.item.points}</span>
      </li>
  );


export default App;
