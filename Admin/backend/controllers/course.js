const express = require("express");
const Course = require("../models/course"); // Adjust the path as necessary
const courseRouter = express.Router();

// POST request to add a new course
courseRouter.post("/", async (req, res) => {
  const { course_title, course_category, course_description } = req.body;
  console.log(course_title, course_category, course_description);
  try {
    const course = new Course({
      course_title,
      course_category,
      course_description,
    });

    const savedCourse = await course.save();
    console.log(savedCourse);
    res.status(201).json(savedCourse);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
courseRouter.get("/", async (req, res) => {
  try {
    // Create a new camp
    const courses = await Course.find({});
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = courseRouter;
