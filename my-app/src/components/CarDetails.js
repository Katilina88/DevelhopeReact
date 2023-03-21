import React, { useRef, useEffect } from 'react';

function CarDetails({ initialData }) {
  const formRef = useRef(null);

  useEffect(() => {
    formRef.current.elements.model.value = initialData.model;
    formRef.current.elements.year.value = initialData.year;
    formRef.current.elements.color.value = initialData.color;
  }, [initialData]);

  return (
    <div>
      <form ref={formRef}>
        <input type="text" name="model" id="model-input" />
        <input type="number" name="year" id="year-input" />
        <input type="text" name="color" id="color-input" />
      </form>
    </div>
  );
}

export default CarDetails;
