import React, { useState } from 'react';
import Form from '@rjsf/core';
import validator from '@rjsf/validator-ajv8';  // Correct validator import
import { personSchema } from '../schemas/personSchema';
import { formDataToXml } from '../utils/formDataToXml';

const XmlForm = () => {
  const [xmlOutput, setXmlOutput] = useState<string>('');

  const handleSubmit = ({ formData }: any) => {
    const xml = formDataToXml(personSchema, formData);
    setXmlOutput(xml);
  };

  return (
    <div>
      <Form
        schema={personSchema}
        validator={validator} 
        onSubmit={handleSubmit}
      />
      {xmlOutput && (
        <div>
          <h2>Generated XML</h2>
          <pre>{xmlOutput}</pre>
        </div>
      )}
    </div>
  );
};

export default XmlForm;
