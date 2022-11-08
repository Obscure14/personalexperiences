import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";



const App = ({ activeLink, setActiveLink }) => {
  const [route, setRoute] = useState("home");
  
  const [comments, setComments] = useState([ ]);

  const uuidv4 = () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx" .replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      }
    )
  }
  
  const loadComments =() => {
    const data = localStorage.getItem("comments");
    if (data){
      const json = JSON.parse(data);
      setComments(json);
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    const value = e.target.comment?.value;
    const pastData = [...comments];

    const newObject = {
      id: uuidv4(),
      comment: value,
    };
    const newData = [...pastData, newObject];


    setComments({
      newObject,
      ...comments   
    })
    
  };

  const deleteComment = (id) => {
    const oldDAta = [...comments];
    const filtered = oldDAta.filter((item) => item.id !== id);

    setComments(filtered);

    const jsonData = JSON.stringify(filtered);

    localStorage.setItem("comments", jsonData);
    }

  useEffect(() => {
    loadComments();
  }, [])
  

  const jsonData = JSON.stringify(comments);

  localStorage.setItem("comments", jsonData);

  console.log(comments);

  return (
    <div>
      
      <Navbar activeLink={route} setActiveLink={setRoute} />

      {/* places */}
      {route === "home" && (
        <div
          style={{
            backgroundSize: "cover",
            background: 'url("./images/bg8.png")',
          }} 
          className="min-h-screen grid place-content-center gap-3"
        >
           
            <hr className="flex justify-center w-full max-w-xl w-32 border-4 border-black px-7 lg:px-0"/>
            <div className="flex justify-center w-full max-w-5xl">
            <p className="font-black italic text-7xl bold gap-7">COLLEGE LIFE</p>
            </div>
            
            <div className="flex justify-center w-full max-w-5xl">
            <p className="font-bold text-3xl mt-32">A personal experiences as a college student.</p>
            </div>
          </div>
      )}

      {route === "about" && (
        <div style={{
          backgroundSize: "cover",
          background: 'url("./images/bg3.png")',
        }}
        
          className="min-h-screen grid grid-cols-2 place-content-center place-items-center"
        >
          <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col justify-center items-center text-center">
                <img src="./images/mj.jpg"
                className="h-24 w-24 rounded-full"/>
                <p className="font-bold italic">MAGTIBAY, MARK JANNEL M.</p>
                <div className="flex gap-2 rounded-full">
                <a href="https://www.facebook.com/obscureee14"><img src="./images/fb.png" 
                className="hover:scale-125 curser-pointer select-none h-10 w-10 rounded-full"/>
                </a>
                <a href="">
                  <img src="./images/ig.png"
                className="hover:scale-125 curser-pointer select-none h-10 w-14"/>
                </a>
                <a href="">
                  <img src="./images/twit.png"
                className="hover:scale-125 curser-pointer select-none h-10 w-10"/>
                </a>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center text-center">
                <img src="./images/ari.jpg"
                className="h-24 w-24 rounded-full"/>
                <p className="font-bold italic">MALDO, ARIANE</p>
                <div className="flex gap-2 rounded-full">
                <a href="https://www.facebook.com/profile.php?id=100078444624521">
                  <img src="./images/fb.png" 
                className="hover:scale-125 curser-pointer select-none h-10 w-10 rounded-full"/>
                </a>
                <a href="https://www.instagram.com/enairawr_/">
                <img src="./images/ig.png"
               className="hover:scale-125 curser-pointer select-none h-10 w-14"/>
               </a>
                <a href="https://mobile.twitter.com/ariane_maldo">
                  <img src="./images/twit.png"
                className="hover:scale-125 curser-pointer select-none h-10 w-10"/>
                </a>
                  </div>
                </div>
                <div className="col-span-full flex flex-col justify-center items-center text-center">
                <img src="./images/jana.jpg"
                className="h-24 w-24 rounded-full"/>
                <p className="font-bold italic">LIM, JANA</p>
                <div className="flex gap-2 rounded-full">
                <a href="https://www.facebook.com/janalim15">
                  <img src="./images/fb.png" 
                className="hover:scale-125 curser-pointer select-none h-10 w-10 rounded-full"/>
                </a>
                <a href="https://www.instagram.com/limjanag/?hl=en">
                  <img src="./images/ig.png"
               className="hover:scale-125 curser-pointer select-none h-10 w-14"/>
                </a>
                <a href="https://twitter.com/limjg_">
                  <img src="./images/twit.png"
                className="hover:scale-125 curser-pointer select-none h-10 w-10"/>
                </a>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center text-center">
                <img src="./images/jl.jpg"
                className="h-24 w-24 rounded-full"/>
                <p className="font-bold italic">LORENZO, JOHNLOYD</p>
                <div className="flex gap-2 rounded-full">
                <a href="https://www.facebook.com/lloydiiiii28">
                  <img src="./images/fb.png" 
                className="hover:scale-125 curser-pointer select-none h-10 w-10 rounded-full"/>
                </a>
                <a href="https://instagram.com/jllorenzo_?igshid=YmMyMTA2M2Y=">
                  <img src="./images/ig.png"
                className="hover:scale-125 curser-pointer select-none h-10 w-14"/>
                </a>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center text-center">
                <img src="./images/josh.jpg"
                className="h-24 w-24 rounded-full"/>
                <p className="font-bold italic">MALLETE, JOSHUA</p>
                <div className="flex gap-2 rounded-full">
                <a href="https://www.facebook.com/malletejoshua29/">
                  <img src="./images/fb.png" 
                className="hover:scale-125 curser-pointer select-none h-10 w-10 rounded-full"/>
                </a>
                  </div>
                </div>
            </div>
            <div style={{
            backgroundSize: "cover",
            background: 'url("./images/paper.png")',
            borderRadius: "20px",
            padding: "40px",
          }}>
            <p className="font-bold italic text-6xl text-center">ABOUT US</p>
            <br/>
            <br/>
            <br/>
              <p className="font-bold italic text-4xl">
                We are the BSIT students from <br/>National University-Fairview. 
              <br/>This website was designed to <br/>provide guidance and inspiration 
              <br/>to students who are pessimistic, 
              <br/>anxious, anti-social, and other 
              <br/>such characteristics.</p>
              <br/>
              <br/>
              </div>
          </div>
      )}
      {route === "admin" && (
        <div style={{
          backgroundSize: "cover",
          background: 'url("./images/bg3.png")',
        }}
          className="min-h-screen grid grid-cols-1 place-content-center place-items-center gap-3 text-xl">
          <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col justify-center items-center text-center">
                <img src="./images/mj.jpg"
                className="h-24 w-24 rounded-full"/>
                <p className="font-bold italic">MAGTIBAY, MARK JANNEL M.</p>
                <p className="underline underline-offset-4 font-bold italic">Programmer & Design</p>
                <div className="flex gap-2 rounded-full">
                <a href="https://www.facebook.com/obscureee14"><img src="./images/fb.png" 
                className="hover:scale-125 curser-pointer select-none h-10 w-10 rounded-full"/>
                </a>
                <a href="">
                  <img src="./images/ig.png"
                className="hover:scale-125 curser-pointer select-none h-10 w-14"/>
                </a>
                <a href="">
                  <img src="./images/twit.png"
                className="hover:scale-125 curser-pointer select-none h-10 w-10"/>
                </a>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center text-center">
                <img src="./images/ari.jpg"
                className="h-24 w-24 rounded-full"/>
                <p className="font-bold italic">MALDO, ARIANE</p>
                <p className="underline underline-offset-4 font-bold italic">Programmer & Design</p>
                <div className="flex gap-2 rounded-full">
                <a href="https://www.facebook.com/profile.php?id=100078444624521">
                  <img src="./images/fb.png" 
                className="hover:scale-125 curser-pointer select-none h-10 w-10 rounded-full"/>
                </a>
                <a href="https://www.instagram.com/enairawr_/">
                <img src="./images/ig.png"
               className="hover:scale-125 curser-pointer select-none h-10 w-14"/>
               </a>
                <a href="https://mobile.twitter.com/ariane_maldo">
                  <img src="./images/twit.png"
                className="hover:scale-125 curser-pointer select-none h-10 w-10"/>
                </a>
                  </div>
                </div>
                <div className="col-span-full flex flex-col justify-center items-center text-center">
                <img src="./images/jana.jpg"
                className="h-24 w-24 rounded-full"/>
                <p className="font-bold italic">LIM, JANA</p>
                <p className="underline underline-offset-4 font-bold italic">Documentation</p>
                <div className="flex gap-2 rounded-full">
                <a href="https://www.facebook.com/janalim15">
                  <img src="./images/fb.png" 
                className="hover:scale-125 curser-pointer select-none h-10 w-10 rounded-full"/>
                </a>
                <a href="https://www.instagram.com/limjanag/?hl=en">
                  <img src="./images/ig.png"
               className="hover:scale-125 curser-pointer select-none h-10 w-14"/>
                </a>
                <a href="https://twitter.com/limjg_">
                  <img src="./images/twit.png"
                className="hover:scale-125 curser-pointer select-none h-10 w-10"/>
                </a>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center text-center">
                <img src="./images/jl.jpg"
                className="h-24 w-24 rounded-full"/>
                <p className="font-bold italic">LORENZO, JOHNLOYD</p>
                <p className="underline underline-offset-4 font-bold italic">Documentation & Design</p>
                <div className="flex gap-2 rounded-full">
                <a href="https://www.facebook.com/lloydiiiii28">
                  <img src="./images/fb.png" 
                className="hover:scale-125 curser-pointer select-none h-10 w-10 rounded-full"/>
                </a>
                <a href="https://instagram.com/jllorenzo_?igshid=YmMyMTA2M2Y=">
                  <img src="./images/ig.png"
                className="hover:scale-125 curser-pointer select-none h-10 w-14"/>
                </a>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center text-center">
                <img src="./images/josh.jpg"
                className="h-24 w-24 rounded-full"/>
                <p className="font-bold italic">MALLETE, JOSHUA</p>
                <p className="underline underline-offset-4 font-bold italic">Documentation & Design</p>
                <div className="flex gap-2 rounded-full">
                <a href="https://www.facebook.com/malletejoshua29/">
                  <img src="./images/fb.png" 
                className="hover:scale-125 curser-pointer select-none h-10 w-10 rounded-full"/>
                </a>
                  </div>
                </div>
                </div>
                </div>
      )}
        {route === "exp" && (
        <div style={{
          backgroundSize: "cover",
          background: 'url("./images/bg3.png")',
        }}
          className="min-h-screen grid grid-cols-1 place-content-center place-items-center gap-3 text-2xl">
           <main style={{
              display: "flex",
              justifyContent: "center",
            }}>
              <div style={{
                width: "100%",
                maxwidth: "700px", 
                backgroundSize: "cover",
                background: 'url("./images/paper.png")',
              }}>
                <div style={{
                    backgroundSize: "cover",
                    background: 'url("./images/paper.png")',
                  }} className="font-bold italic text-6xl text-center"> FREEDOM WALL</div>
                <form 
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                  marginTop: "20px",
                  borderRadius: "5px",
                }}>
                  <label htmlFor="comment" >Type your experience here...
                  </label>
                <input 
                type="text" 
                name="comment" 
                id="comment" 
                style={{
                  padding: "10px",
                  fontSize: '1.2rem',
                  outLine: "none",
                  borderRadius: "5px",
                }}/>
                </form>

                {
                  comments.length > 0 && (
                    <div style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      background: 'url("./images/paper.png")',
                      padding: "10px",
                      borderRadius: "5px",
                    }}>
                      {comments.map((comment, index) => (
                          <div key={'comment_${index + 1}'}>
                          <p style={{ margin: 0, fontSize: "1rem", opacity: 0.7, fontWeight: 'bold'}}>Anonymous said</p>
                          <p style={{ margin: 0, marginLeft: "10px", fontSize: '1.2rem', fontWeight: 'bold'}}>
                            {comment.comment}</p>

                            <button onClick={deleteComment}>Delete</button>
                          </div>
                        ))
                      }
                    </div>
                  )
                }
              </div>
            </main>
        </div> 
      )}
      
    </div>   
  );
};

export default App;
