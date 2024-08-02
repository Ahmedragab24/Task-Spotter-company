// import DataTable from "@/components/DataTable";

import { Button } from "@/components/ui/button";
import { ArrowDownFromLine, CornerDownLeft } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="container mt-28 space-y-5">
        <div className="flex flex-col justify-center items-center text-center space-y-6">
          <h1 className="text-foreground text-xl md:text-2xl lg:text-6xl font-black">
            Hello, <span className="text-primary">Spotter Team</span>
          </h1>

          <h3 className="text-[1rem] lg:text-2xl">
            I am Ahmed,
            <span className="block">
              and I am happy to accomplish this task.
            </span>
            <span className="block">
              I hope you like it and that I will be part of the work team.
            </span>
          </h3>
        </div>

        <div className="flex flex-col justify-center items-center text-center space-y-2">
          <h5 className="duration-200 text-lg lg:text-xl">To view the Code</h5>
          <div className="flex space-x-3">
            <a
              href="https://github.com/Ahmedragab24/Task-Spotter-company"
              target="_blank"
              rel="noopener"
              className="block duration-200 hover:text-primary"
            >
              click here
            </a>
            <CornerDownLeft />
          </div>
          <h5 className="duration-200  text-lg lg:text-xl ">
            To view the data click here
          </h5>
          <ArrowDownFromLine />

          <Link href={"/dataTable"}>
            <Button size={"lg"}>Data Table</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
