import PB from "./utils/pb";
import {NextRequest, NextResponse} from "next/server";

const pb = PB.get();

// check if the user is logged in


export function middleware(request) {
    // console.log("middleware");
    // console.log(pb.authStore.isValid);
    return NextResponse.next();
    // return NextResponse.redirect(new URL('/home', request.url));
}