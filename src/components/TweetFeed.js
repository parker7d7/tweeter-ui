import { useEffect, useState } from 'react';
export default function TweetFeed(props) {
    const [tweets, setTweets] = useState[{}];
    useEffect( () => {
        const makeAPICall = async () => {
          try {
          const res = await fetch('http://localhost:3000/tweets');  
          const data = await res.json();
          await setTweets(data);
          console.log(setTweets);
          } catch (err) {
             console.error(err)
          }
        }
        makeAPICall()
      }, [])
    return (   
        
        <div className="tweeter">
            
            <form className="tweet_form">
            {/* <label>
                <input type="text" name="title" />
            </label> */}
                <label>
                    <input type="text" name="content" placeholder="What's happening?" />
                </label>
            {/* <label>
                <input type="text" name="author" />
            </label> */}
            </form>
            <button className="tweet_button" type="submit" value="Submit">Tweet</button>
            
        </div>
    )
}