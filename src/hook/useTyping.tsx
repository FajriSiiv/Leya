"use client";
import React, { useState, useEffect } from "react";

const TypingHome = () => {
  const [text, setText] = useState("");
  const [currentSentence, setCurrentSentence] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  const messages = [
    "What does Article 21 of the ICCPR say?",
    "Summarize the new EU AI Act",
    "Check these three documents for GDPR compliance",
  ];
  const typingSpeed = isDeleting ? 30 : 50;
  const pauseBetweenMessages = 1000;

  useEffect(() => {
    let typingTimeout: any;

    if (!isDeleting && index < messages[currentSentence].length) {
      typingTimeout = setTimeout(() => {
        setText((prev) => prev + messages[currentSentence][index]);
        setIndex((prevIndex) => prevIndex + 1);
      }, typingSpeed);
    } else if (isDeleting && index > 0) {
      typingTimeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
        setIndex((prevIndex) => prevIndex - 1);
      }, typingSpeed);
    } else if (!isDeleting && index === messages[currentSentence].length) {
      typingTimeout = setTimeout(
        () => setIsDeleting(true),
        pauseBetweenMessages
      );
    } else if (isDeleting && index === 0) {
      setIsDeleting(false);
      setCurrentSentence((prevSentence) =>
        prevSentence === messages.length - 1 ? 0 : prevSentence + 1
      );
    }

    return () => clearTimeout(typingTimeout);
  }, [index, isDeleting, currentSentence]);

  return (
    <p className="py-1 w-[500px] text-sm font-semibold max-md:w-[300px] max-md:text-[10px]">
      {text}
    </p>
  );
};

export default TypingHome;
