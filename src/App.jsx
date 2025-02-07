import { useState, useEffect } from 'react'
import { USERS } from './config'
import './App.css'

function App() {
  const [searchText, setSearchText] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(USERS);
  const [filterCategory, setFilterCategory] = useState("");
  const [filterBrand, setFilterBrand] = useState("");
 


  useEffect(() => {
    if(!searchText){
      setFilteredUsers(USERS);
      return;
    }
    const tempFilteredUsers = USERS.filter((user)=>{
      if(user.name.toLocaleLowerCase().includes(searchText)){
        return true;
      }
      else if (user.category.toLocaleLowerCase().includes(searchText)){
        return true;
      }
        else if (user.brand.toLocaleLowerCase().includes(searchText)){
          return true;
        }
          else{
            return false;
          }

    });
    setFilteredUsers(tempFilteredUsers);
  },[searchText]);


  useEffect(() => {
    if (!filterCategory && !filterBrand){
      setFilteredUsers(USERS);
      return;
    }

    const tempFilteredUsers = USERS.filter((user) => {
      if(
        filterCategory &&
         user.category === filterCategory &&
         filterBrand && 
         user.brand === filterBrand
        ){
        return true;
      }

      if(filterBrand && !filterCategory && user.brand === filterBrand ) {
        return true;
      }
if(filterCategory && !filterBrand && user.category === filterCategory ) {
  return true;
}


return false;
});

    setFilteredUsers(tempFilteredUsers);
  },[filterCategory,filterBrand]);






  return (
      <div className='bg-slate-100 min-h-screen'>
      <h1  className="text-center text-4xl font-bold py-5">MY CART 🛒</h1>

<input type='text' 
placeholder='search' 
className='w-2/3 p-2 my-10 bg-white block mx-auto rounded-lg text-2xl focus:outline-none border-gray-200'
value={searchText}
onChange={(e)=>setSearchText(e.target.value.toLocaleLowerCase()) }
/>
{
  searchText ? (
    <p className='text-center mt-1'>
      {filteredUsers.length===0 ? "oops! No products found...Try another search...":
      ` Found ${filteredUsers.length} products...`}
    </p>
  ): null
}

<div className='flex justify-around'>
  <div>
    <span>Filter By Category:</span>
    <select className='bg-white text-lg my-2  rounded-lg px-5'
    value={filterCategory}
    onChange={(e) => setFilterCategory(e.target.value)}>
      <option value="">All</option>
      {
        USERS.map((user)=> {
          return <option key={user.category} value={user.category}>{user.category}</option>
        })
      }
      
    </select>
  </div>
  <div>
  <span>Filter By Brand:</span>
    <select className='bg-white text-lg my-2  rounded-lg px-5'
    value={filterBrand}
    onChange={(e) => setFilterBrand(e.target.value)}>
      <option value="">All</option>
      {
        USERS.map((user)=> {
          return <option key={user.brand} value={user.brand}>{user.brand}</option>
        })
      }
    </select>
  </div>

  
  </div>


<div className='flex flex-wrap justify-around rounded-lg mt-10 '>
  {filteredUsers.map((userData, index)=>{
    const {name,category,brand,productImage} = userData;
    
    return(<div className="bg-white  mb-5 mx-6 px-5 py-2 rounded-lg w-[400px] text-center shadow-xl" >
    <img src={productImage} className='h-45 mx-auto rounded-sm'/>
    <h1 className='m-1 font-bold text-2xl'>{name}</h1> 
     <p className='m-1 font-semibold '>Category : {category}</p>
     <p className='m-1 font-semibold' >Brand : {brand}</p>
      </div>)
  })}
</div>
      </div>
  
  )
}

export default App
