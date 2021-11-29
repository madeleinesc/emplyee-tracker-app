USE employee_db

SELECT departments.dpt_name AS Department, departments.id AS DepartmentId
FROM departments



SELECT roles.title AS Title, roles.id AS RoleId, roles.salary AS Salary, departments.dpt_name AS Department 
FROM roles
JOIN departments ON departments.id = role.departments_id




