import app from "./app";


const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send(`spicyland backend is running successfully!`);
}); 


let server = app.listen(port, () => {
    console.log(`App is dropped on ${port}`);
});

const exitHandler = () => {
    if (server) {
      server.close(() => {
        console.log('Server closed');
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
};

const unexpectedErrorHandler = ( error: Error ) => {
    console.log(error);
    exitHandler();
};
  
process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
    console.info('SIGTERM received');
    if (server) {
      server.close();
    }
});

