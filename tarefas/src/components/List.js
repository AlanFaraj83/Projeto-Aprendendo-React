const List = () => {
    const items = [
    {
        id: 1,
        name:"Alan",
    }, 
    {
        id: 2,
        name:"Vitor",

    }, 
    {
        id: 3,
        name:"Ana",
    },    
  ];

    return (
        <div>
            {items.map((item) => (
                <p>
                    
                    {item.id} - {item.name}
                
                </p>
            ))}
        </div>
    );
};

export default List;