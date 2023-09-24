import { AppSyncResolverEvent } from "aws-lambda";
import { Book } from "../types/book";

export const handler = (event: AppSyncResolverEvent<object, Book>) => {
    const book = event.arguments
    return book
} 