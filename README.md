# Medcloud-challenge-nine

# Development challenge

![logo medcloud-03 white copy](https://user-images.githubusercontent.com/46347123/158176045-de9fefb0-35e2-4515-83ff-c132608aa870.png)

About Medcloud:

We make exams and medical data management more flexible, secure and effective by accelerating the transition from clinics and hospitals to the cloud.
The RIS and PACS systems have been practically the same for the past 25 years. Interoperability problems, high costs and a lack of understanding about the patient's access to his medical records.

These points defined limits for the doctor-patient relationship and barriers to radiology workflows. We are revolutionizing this through a Care Coordination based solution that improves workflows for providers and integrates doctors and patients for a better experience.

Since our foundation, almost 10 years ago, we have prioritized excellence in the management of health data, structuring workflows of health professionals, clinics, laboratories and hospitals for assertive and quality diagnostics.

We understand that behind each medical record there is a patient seeking to improve his health and the hope of family members for his well being. After all, we are all patients, and Medcloud's mission is to help you live longer and better. #PatientFirst

Medcloud's challenge for Dev Full Stack.

## Goal

- To develop a web application (CRUD) to manage patient registers (Patient's name, birth date, email and address).

## Required

- You need to develop both the front-end and the back-end.
- In the front-end you MUST use React.
- In the back-end you MUST use Node.js.
- The patient data should not be static  (You MUST use a cloud database or a local database).
- Field validation (date, required fields, etc).

## Extra Points

- Cache the data in-browser.
- Pagination.
- Use Material UI - https://material-ui.com.
- A cool design.
- If you choose a local database: a docker environment of your project.

## References

- Intro to React: https://reactjs.org/tutorial/tutorial.html.

## What will be evaluated:

- Clean and organized code (naming, etc.)
- Knowledge of patterns (PSRs, design patterns, SOLID)
- Be consistent and know how to argue your choices
- Present solutions you master
- Data Modeling
- Code maintainability
- Error handling
- Architecture (structuring thought before writing)
- Affection in decoupling components (other layers, service, repository)

According to the above criteria, we will evaluate your test in order to proceed to the technical interview. If you have not acceptably achieved what we are proposing above, we will not proceed with the process.

## For the .env
- DATABASE_URL="mysql://user:password@host:port/database?schema=public""
- JWT_SECRET = gerar algum código criptografado

## Running the code
When creating and connecting to the database, create the tables by the command:
```yarn prisma migrate dev```

And then run the server with:
```yarn dev```

With the server running, on the client side, just give
```yarn dev```
