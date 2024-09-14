import React, { useState, ChangeEvent, FormEvent } from "react";
import { Slot } from "@wordpress/components";
import { PluginArea } from "@wordpress/plugins";
import { useSelect } from "@wordpress/data";

interface FormData {
  name: string;
  age: string;
  phone?: string;
  email?: string;
}

interface Errors {
  name?: string;
  age?: string;
}

const DokanLiteForm = () => {
  const [formData, setFormData] = useState<FormData>({ name: "", age: "" });
  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const errors: Errors = {};
    // if (!formData.name) errors.name = "Name is required";
    // if (!formData.age) errors.age = "Age is required";
    // Additional validation will be done by injected fields
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Trigger submission, this can be extended
      console.log("Form Data:", formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p>{errors.name}</p>}
      </div>

      <div>
        <label>Age</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        {errors.age && <p>{errors.age}</p>}
      </div>

      {/* This Slot will be filled by the Pro plugin */}
      <Slot
        name="dokan-pro-plugin"
        fillProps={{ formData, handleChange, errors, setErrors }}
      />
      <PluginArea />
      <button type="submit">Submit</button>
    </form>
  );
};

export default DokanLiteForm;
