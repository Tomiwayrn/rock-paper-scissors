

export default function Home({modal}){


    const opaque = {opacity:'.4'}
    return (
        <main className="home" style={modal?opaque:{}}>
           <div className="text-container">
            <h2 >
                so, you want to travel to
            </h2>
            <h2 style={{color: 'honeydew'}} className="header">space</h2>
            <p>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hove kind of on the edge of it. Well sit back, and relax because we'll give you out of this world experience! </p>
            </div>  
            
                <a href="/destination" style={{fontSize: 'inherit', color: 'inherit'}}><button  className="explore-btn">Explore</button></a>
            
      </main>
    )
}