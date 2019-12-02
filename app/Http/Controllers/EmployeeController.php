<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\employee;
class EmployeeController extends Controller
{
   public function create(Request $request)
   {
       $employee = new employee();

       $employee->fname = $request->input('fname');
       $employee->lname = $request->input('lname');
       $employee->address = $request->input('address');
       $employee->email = $request->input('email');
       $employee->gender = $request->input('gender');

       $employee->save();
       return response()->json($employee);

   }
   public function employeelist()
   {
       $employee = employee::all();
       return response()->json($employee);
   }

   public function showemployeeid($id)
   {
       $employees = employee::find($id);
       return response()->json($employees);
   }
   public function updateemployeeid(Request $request ,$id)
   {
       $employee =employee::find($id);

       $employee->fname = $request->input('fname');
       $employee->lname = $request->input('lname');
       $employee->address = $request->input('address');
       $employee->gender = $request->input('gender');
       $employee->email = $request->input('email');

        $employee->save();
        return response()->json($employee);

   }
   public function deleteemployee($id)
   {
       $employee = employee::find($id);
       $employee->delete();
       return response()->json($employee);
   }
}
