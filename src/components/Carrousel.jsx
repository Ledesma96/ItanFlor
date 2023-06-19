import React, { useEffect, useState, useRef } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { Card, Avatar } from '@chakra-ui/react';

const Carrousel = () => {
  const scrollRef = useRef(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const dataBase = getFirestore();
    const message = collection(dataBase, 'comments');
    getDocs(message).then((snapshot) => {
      const documents = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setComments(documents);
    });
  }, []);
console.log(comments);
  useEffect(() => {
    const container = scrollRef.current;

    let scrollAmount = 0;
    let scrollTimer = null;
    let isScrollingToEnd = false;

    const startScroll = () => {
      scrollTimer = setInterval(() => {
        if (isScrollingToEnd) {
          container.scrollLeft += 1; // Ajusta la cantidad de desplazamiento aquí
          scrollAmount += 1;
          if (scrollAmount >= container.scrollWidth - container.clientWidth) {
            isScrollingToEnd = false;
            scrollAmount = 0;
          }
        } else {
          container.scrollLeft -= 1; // Ajusta la cantidad de desplazamiento aquí
          scrollAmount += 1;
          if (scrollAmount >= container.scrollWidth - container.clientWidth) {
            isScrollingToEnd = true;
            scrollAmount = 0;
          }
        }
      }, 50); // Ajusta la velocidad de desplazamiento aquí (en milisegundos)
    };

    startScroll();

    return () => {
      if (scrollTimer) {
        clearInterval(scrollTimer);
      }
    };
  }, []);

  return (
    <>
      <h2>TESTIMONIOS DE ALUMNOS</h2>
      <div className='contenedorCard' ref={scrollRef}>
        {comments.map((comment, index) => (
          <div key={index} className='caard'>
            <div className='card__message'>
              <p className='card__message__text'>{comment.message}</p>
            </div>
            <div className='avatar'>
              <Avatar className='avatar__avatar' name={document.name} src={comment.avatar} />
              <div>
                <p className='avatar__text'>{comment.name} {comment.lastname}</p>
                <p className='avatar__ofice'>{comment.ofice}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Carrousel;
