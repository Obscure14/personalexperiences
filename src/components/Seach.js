const Search = ({ activeLink, setActiveLink }) => {
    return (
      <nav>
        <main style={{
              display: "flex",
              justifyContent: "center",
            }}>
              <div style={{
                width: "100%",
                maxwidth: "700px",
              }}>
                <form onSubmit={handleSubmit}>
                  <label htmlFor="comment">Comment
                  </label>
                  <br/>
                <input type="text" name="comment" id="comment" />
                </form>

                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem'
                }}>
                  {comments.map((comment, index) => (
                      <div key={'comment_${index + 1}'}>
                      <p>{comment.comment}</p>
                      </div>
                    ))
                  }
                </div>
              </div>
            </main>


            <div className="grid grid-cols-1 gap-10">
              <div className="flex flex-col justify-center items-center text-center">
              <img src="./images/jana.jpg"
                className="h-24 w-24 rounded-full"/>
                <br/>
              <p style={{
                backgroundSize: "cover",
                background: 'url("./images/paper.png")',
                borderRadius: "50px",
                padding: "30px",
              }}
              className="font-bold italic text-4xl">
                
                Lim, Jana</p>
              </div>
              <div className="flex flex-col justify-center items-center text-center">
              <p style={{
                backgroundSize: "cover",
                background: 'url("./images/paper.png")',
                borderRadius: "50px",
                padding: "30px",
              }}
              className="font-bold italic text-2xl">
                Hello there, fellow students! 
                <br/>I'm Jana Lim, 
                a 20-year-old <br/>student at National University<br/> 
                Fairview studying a Bachelor <br/>of Science in 
                Information <br/>Technology with a Specialization 
                <br/>in Mobile and Internet.</p>
              </div>
              </div>
              <div className="grid grid-cols-1 gap-10">
              <div className="flex flex-col justify-center items-center text-center">
              <p style={{
                backgroundSize: "cover",
                background: 'url("./images/paper.png")',
                borderRadius: "50px",
                padding: "30px",
              }}
              className="font-bold italic">
                As an IT student who studied 
                <br/>through virtual learning, 
                <br/>I find it difficult to understand 
                <br/>this program since I'm not very familiar 
                <br/>with computers. I took this course because 
                <br/>my mother wants me to be entirely secure in 
                <br/>the future with a high-paying, in-demand career. 
                <br/>I struggled at first to adjust to the new 
                <br/>environment and learning style. so I'm 
                <br/>forced to do self-study. I experienced 
                <br/>to go solo in a group activities because 
                <br/>I was too shy to connect with my classmates, 
                <br/>but years later, the COVID issue is no longer 
                <br/>as alarming as it used to be. As a response, 
                <br/>some schools are considering returning to 
                <br/>face-to-face sessions until the CHED implements 
                <br/>blended or hybrid learning. I was delighted 
                <br/>when I heard the news since I assumed I wouldn't 
                <br/>have any problems keeping up with the class, but 
                <br/>I was mistaken. I didn't expect that HypeBlend 
                <br/>would be more difficult than a simple online class. 
                <br/>In hybrid learning, you must fix your time management 
                <br/>and your schedules. I experienced running out of time 
                <br/>and being late for the onsite class because I had an 
                <br/>online class to finish. Since my residence is far from
                <br/> the school, I have to adjust by 1 hour and 30 minutes 
                <br/>to avoid being late for class, which is difficult.</p>
              </div>
              </div>
              <div>
                </div>


            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col justify-center items-center text-center">
                <img src="./images/mj.jpg"
                className="h-32 w-32 rounded-full"/>
                <br/>
                <p className="hover:scale-125 curser-pointer select-none font-bold italic">MAGTIBAY, MARK JANNEL M.</p>
                </div>
                <div className="flex flex-col justify-center items-center text-center">
                <img src="./images/ari.jpg"
                className="h-32 w-32 rounded-full"/>
                <br/>
                <p className="hover:scale-125 curser-pointer select-none font-bold italic">MALDO, ARIANE</p>
                </div>
                <div className="col-span-full flex flex-col justify-center items-center text-center">
                <img src="./images/jana.jpg"
                className="h-32 w-32 rounded-full"/>
                <br/>
                <p className="hover:scale-125 curser-pointer select-none font-bold italic">LIM, JANA</p>
                </div>
                <div className="flex flex-col justify-center items-center text-center">
                <img src="./images/jl.jpg"
                className="h-32 w-32 rounded-full"/>
                <br/>
                <p className="hover:scale-125 curser-pointer select-none font-bold italic">LORENZO, JOHNLOYD</p>
                </div>
                <div className="flex flex-col justify-center items-center text-center">
                <img src="./images/josh.jpg"
                className="h-32 w-32 rounded-full"/>
                <br/>
                <p className="hover:scale-125 curser-pointer select-none font-bold italic">MALLETE, JOSHUA</p>
                </div>
                </div>


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
      </nav>
    );
  };
  
  export default Search;
  