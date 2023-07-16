import React from "react";

export interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode,
    color?: string
}