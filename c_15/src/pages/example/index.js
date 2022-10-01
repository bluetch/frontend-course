import { useState, useEffect } from 'react';
import { Button, Layout } from '../../components';
import styles from './example.module.scss';

const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7, 8];
const array3 = array1.concat(array2);
// const array3 = [...array1, ...array2];

// console.log(array3);

export const Example = () => {

  const [mobileError, setMobileError] = useState(false);

  const handleVerify = () => {
    let number = document.querySelector("#mobile").value;
    let mobileRegex = /((?=(09))[0-9]{10})$/g;
    if (mobileRegex.test(number)) {
      setMobileError(false);
    } else {
      setMobileError(true)
    }

  }

  const handleReplace = () => {
    let inputFrom = document.getElementById("inputFrom").value;
    let regex = new RegExp(`\\b${inputFrom}\\b`, 'gi');
    let inputTo = document.getElementById("inputTo").value;

    document.querySelectorAll("p").forEach(elem => {
      elem.innerHTML = elem.innerHTML.replace(regex, inputTo);
    })
  }

  useEffect(() => {
    document.title = "Example";
  }, []);

  return (
    <Layout className={styles.example}>
      <div className="container">
        <h1>Example</h1>
        <section>
          <h3>Spread syntax</h3>
          <code>
            const array1 = [1, 2, 3, 4]; <br />
            const array2 = [5, 6, 7, 8]; <br />
            const array3 = [...array1, ...array2];<br />
            console.log(array3) // [1,2,3,4,5,6,7,8];
          </code>
          <hr />
        </section>
        <section>
          <h3>Mobile verify</h3>
          <label htmlFor="mobile" className={styles.label}>
            <span>Mobile number</span>
            <input type="text" id="mobile" />
          </label>
          <Button onClick={handleVerify}>Verify</Button>
          <div className={styles.error}>
            {mobileError && "手機號碼格式錯誤"}
          </div>
        </section>
        <hr />
        <article>
          <h3>Regular Expressions</h3>
          <p>Queen Elizabeth II, the UK's longest-serving monarch, has died at Balmoral aged 96, after reigning for 70 years.</p>
          <p>She died peacefully on Thursday afternoon at her Scottish estate, where she had spent much of the summer.</p>
          <p>The Queen came to the throne in 1952 and witnessed enormous social change.</p>
          <p>Her son King Charles III said the death of his beloved mother was a "moment of great sadness" for him and his family and that her loss would be "deeply felt" around the world.</p>
          <p>He said: "We mourn profoundly the passing of a cherished sovereign and a much-loved mother.</p>
          <p>"I know her loss will be deeply felt throughout the country, the realms and the Commonwealth, and by countless people around the world."</p>
          <p>During the coming period of mourning, he said he and his family would be "comforted and sustained by our knowledge of the respect and deep affection in which the Queen was so widely held".</p>
          <p>The King and his wife, Camilla, now Queen Consort, will return to London on Friday, Buckingham Palace said. He is expected to address the nation.</p>
          <p>Senior royals had gathered at Balmoral after the Queen's doctors became concerned about her health earlier in the day.</p>
          <p>All the Queen's children travelled to Balmoral, near Aberdeen, after doctors placed the Queen under medical supervision.</p>
          <p>Her grandson and now heir to the throne, Prince William, and his brother, Prince Harry, also gathered there.</p>
          <hr />
          <label htmlFor="inputFrom" className={styles.label}>
            <span>replace from:</span>
            <input type="text" id="inputFrom" />
          </label>
          <label htmlFor="inputTo" className={styles.label}>
            <span>to:</span>
            <input type="text" id="inputTo" />
          </label>
          <Button onClick={handleReplace}>Replace</Button>
          <hr />
        </article>
      </div>
    </Layout>
  )
}