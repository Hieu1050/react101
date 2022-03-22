function Header (){
   return (
      <header>
            <nav>
               <img src="./logo192.png"/>
            </nav>
      </header>
   )
}
function Content (){
   return (
      <div>
         <h1>Why I learn react</h1>
         <ol>
               <li>
                  Because I only know back-end
               </li>
               <li>
                  Because I want to make my own web project
               </li>
               <li>
                  Because I want to have a job so bad
               </li>
         </ol>
      </div>
   )
}
function Footer (){
   return (
         <footer>
            <small>Written by hieuchivu on 2022-03-22</small>
         </footer>
   )
}

function Page (){
   return (
      <div>
         <Header />
         <Content />
         <Footer />
      </div>
   )
}

ReactDOM.render (
   <Page />,
   document.getElementById("root")
)