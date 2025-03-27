import { Body, Controller, Post, Get, Param, Put, Patch, Delete } from "@nestjs/common"

@Controller('users')
export class UserController {

    @Post()
    async create( @Body() body: any){
        return {body}
    }

    @Get()
    async read(){
        return {users: []}        
    }

    @Get(':id')
    async readOne(@Param() param ){
        return {user: {}, param}        
    }

    @Put(':id')
    async update(@Body() body, @Param() param){
        return {
            method: 'put',
            body, 
            param}
    }

    @Patch()
    async updateParcial(@Body() body, @Param() param){
        return {
            method: 'patch',
            body, 
            param}
    }

    @Delete(':id')
    async delete(@Param() param){
        return {
            param
        }
    }


}