import "../components/css/Addstory.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

export default function Addstory() {
  const navigate = useNavigate();
  const [slideCount, setSlideCount] = useState(3);

  function addSlide() {
    setSlideCount((prevCount) => prevCount + 1);
  }

  function closeSlide() {
    setSlideCount((prevCount) => prevCount - 1);
  }

  const goToHomePage = () => {
    navigate("/");
  };

  const [data, setData] = useState({
    heading: "",
    description: "",
    image:"",
    category:""
  });

  const addStory = async (e) => {
    e.preventDefault();
    const { heading, description, image, category } = data;
    try {
      const { data } = await axios.post("/addstory", {
        heading,
        description,
        image,
        category
      });

      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Story Uploaded Sucessfully");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div>
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="crossButton" onClick={goToHomePage}>
            X
          </div>
          <div className="uptoSlideLimit">Add upto 6 slides</div>
          <div className="slideMain">
            <div className="slideContainer">
              <div className="slideCountButton">Slide 1</div>
            </div>
            <div className="slideContainer">
              <div className="slideCountButton">Slide 2</div>
            </div>
            <div className="slideContainer">
              <div className="slideCountButton">Slide 3</div>
            </div>
            {slideCount > 3 && (
              <div className="slideContainer">
                <div className="crossButton" onClick={closeSlide}>
                  X
                </div>
                <div className="slideCountButton">Slide 4</div>
              </div>
            )}
            {slideCount > 4 && (
              <div className="slideContainer">
                <div className="crossButton" onClick={closeSlide}>
                  X
                </div>
                <div className="slideCountButton">Slide 5</div>
              </div>
            )}
            {slideCount > 5 && (
              <div className="slideContainer">
                <div className="crossButton" onClick={closeSlide}>
                  X
                </div>
                <div className="slideCountButton">Slide 6</div>
              </div>
            )}
            {slideCount < 6 && (
              <div className="slideContainer" onClick={addSlide}>
                <div className="slideCountButton">Add +</div>
              </div>
            )}
          </div>
          <div>
            <form onSubmit={addStory}>
              <div className="inputFields">
                <div className="inputDiv">
                  <label className="heading">Heading :</label> <br />
                  <input
                    className="headingInput"
                    type="text"
                    name="heading"
                    placeholder="Your heading"
                    value={data.heading}
                    onChange={(e) =>
                      setData({ ...data, heading: e.target.value })
                    }
                  />
                </div>
                <div className="descriptionDiv">
                  <label className="descriptionTag">Description :</label>
                  <br />
                  <textarea
                    className="descriptionInput"
                    name="description"
                    placeholder="Story Description"
                    type="text"
                    value={data.description}
                    onChange={(e) =>
                      setData({ ...data, description: e.target.value })
                    }
                  ></textarea>
                </div>
                <div className="imageDiv">
                  <label className="heading">Image :</label>
                  <br />
                  <input
                    className="headingInput"
                    name="imageUrl"
                    placeholder="Add Image url"
                    type="text"
                    value={data.image}
                    onChange={(e) =>
                      setData({ ...data, image: e.target.value })
                    }
                  />
                </div>
                <div className="categoryDiv">
                  <label className="headingInput">Category :</label>
                  <br />
                  <select
                    className="headingInput"
                    required=""
                    name="category"
                    value={data.category}
                    onChange={(e) =>
                      setData({ ...data, category: e.target.value })
                    }
                  >
                    <option value="" disabled="" hidden="">
                      Select category
                    </option>
                    <option value="food">food</option>
                    <option value="health_and_fitness">
                      health and fitness
                    </option>
                    <option value="travel">travel</option>
                    <option value="movies">movies</option>
                    <option value="education">education</option>
                  </select>
                </div>
                <div className="errorText"></div>
                <div className="buttons">
                  <div className="moveButton">
                    <div className="previousButton">Previous</div>
                    <div className="nextButton">Next</div>
                  </div>
                  <button type="submit" className="postButton">
                    Post
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
