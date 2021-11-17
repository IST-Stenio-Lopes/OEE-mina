import React from "react";
import ApexChart from "./line-chart";
import { ApexChart as ApexChart2 } from "./bar-chart";


export default function Workstation() {

    return (
        <div>
            <div className=".container-fluid">
                <div class="row align-items-start">
                    <div class="col-md-5">


                        <div class="col-md-8">

                        </div>
                        <div class="col-md-4">
                            <ApexChart2 />
                        </div>
                    </div>
                    <div class="col-md-7">
                        <ApexChart />
                        <ApexChart2 />
                    </div>
                </div>

            </div>

        </div>
    );
}