import express from "express";
const app = express();

export default function () {
    app.listen(8080, (): void => console.log("Listening to port 8080"));

    app.get("/", async (req: any, res: any): Promise<void> => {
        res.send("yes");
    });
}
