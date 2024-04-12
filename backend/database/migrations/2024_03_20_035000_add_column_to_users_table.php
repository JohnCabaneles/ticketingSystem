<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->unsignedBigInteger('departments_id')->nullable();
            $table->string('contact_number');
            $table->unsignedBigInteger('roles_id')->nullable();
            
            $table->foreign('departments_id')->references('id')->on('departments')->onDelete('cascade');
            $table->foreign('roles_id')->references('id')->on('roles')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropForeign(['departments_id']);
            $table->dropForeign(['roles_id']);
            $table->dropColumn(['departments_id', 'contact_number', 'roles_id']);
        });
    }
};
