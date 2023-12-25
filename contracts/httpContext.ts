// import { test } from '@japa/runner';
declare module '@ioc:Adonis/Core/HttpContext' {
    interface HttpContextContract{
        test: string
    }
}