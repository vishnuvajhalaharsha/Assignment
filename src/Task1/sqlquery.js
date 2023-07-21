export const sqlQuery=`-- create  Students table
CREATE TABLE Students (
  id INT PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  title VARCHAR(10) NOT NULL,
  email VARCHAR(100) NOT NULL,
  dob DATE NOT NULL
);

-- create Subjects table
CREATE TABLE Subjects (
  subject_name VARCHAR(100) PRIMARY KEY
);

-- create StudentSubjects Table
CREATE TABLE StudentSubjects (
  id INT NOT NULL,
  subject_name VARCHAR(100) NOT NULL,
  PRIMARY KEY (id, subject_name),
  FOREIGN KEY (id) REFERENCES Students(id),
  FOREIGN KEY (subject_name) REFERENCES Subjects(subject_name)
);



-- insert  data
INSERT INTO Students (id, first_name, last_name, title, email, dob)
VALUES
  (1, 'Bern', 'Oleszczak', 'Mr', 'boleszczak0@test.com', '2000-12-24'),
  (2, 'Daria', 'Innocenti', 'Ms', 'dinnocenti1@test.com', '2000-09-01'),
  (3, 'Thorstein', 'Cicchetto', 'Honorable', 'tcicchetto2@test.com', '2002-09-06'),
  (4, 'Georgianna', 'Brafield', 'Honorable', 'gbrafield3@test.com', '2002-07-16'),
  (5, 'Bryanty', 'Breche', 'Dr', 'bbreche4@test.com', '2001-10-23'),
  (6, 'Murvyn', 'Birchall', 'Rev', 'mbirchall5@test.com', '2002-11-08'),
  (7, 'Sherline', 'McNysche', 'Honorable', 'smcnysche6@test.com', '2000-02-28'),
  (8, 'Dukie', 'Neely', 'Honorable', 'dneely7@test.com', '2000-06-18'),
  (9, 'Mil', 'Udie', 'Honorable', 'mudie8@test.com', '2002-06-07'),
  (10, 'Tiffany', 'Philpot', 'Dr', 'tphilpot9@test.com', '2002-11-12'),
  (11, 'Elga', 'Braim', 'Rev', 'ebraima@test.com', '2002-05-14'),
  (12, 'Zara', 'Benettelli', 'Mr', 'zbenettellib@test.com', '2001-11-07'),
  (13, 'Emogene', 'Romera', 'Ms', 'eromerac@test.com', '2002-01-28'),
  (14, 'Bail', 'Reuble', 'Ms', 'breubled@test.com', '2003-10-27'),
  (15, 'Borden', 'Igoe', 'Rev', 'bigoee@test.com', '2003-06-26'),
  (16, 'Essy', 'Nation', 'Dr', 'enationf@test.com', '2001-05-28'),
  (17, 'Arch', 'Kitchen', 'Honorable', 'akitcheng@test.com', '2000-01-26'),
  (18, 'Elle', 'Beagrie', 'Dr', 'ebeagrieh@test.com', '2002-01-07'),
  (19, 'Brietta', 'Pietzker', 'Rev', 'bpietzkeri@test.com', '2002-09-11'),
  (20, 'Dar', 'Mallan', 'Honorable', 'dmallanj@test.com', '2001-03-31');
  
INSERT INTO Subjects (subject_name)
VALUES
  ('Biology'),
  ('Chemistry'),
  ('History'),
  ('Geography'),
  ('Physics');


-- Insert data in junction table

INSERT INTO StudentSubjects (id, subject_name)
VALUES
  (1, 'Biology'),
  (1, 'Chemistry'),
  (2, 'History'),
  (2, 'Geography'),
  (3, 'Physics'),
  (4, 'Biology'),
  (4, 'Geography'),
  (5, 'History'),
  (6, 'Geography'),
  (7, 'Geography'),
  (8, 'Physics'),
  (8, 'Biology'),
  (9, 'History'),
  (10, 'Chemistry'),
  (10, 'Biology');




-- query tables

SELECT * FROM students;
SELECT * FROM Subjects;
SELECT * FROM StudentSubjects;
SELECT s.id, s.first_name, s.last_name, s.title, s.email, s.dob, ss.subject_name
FROM Students s
JOIN StudentSubjects ss ON s.id = ss.id

`