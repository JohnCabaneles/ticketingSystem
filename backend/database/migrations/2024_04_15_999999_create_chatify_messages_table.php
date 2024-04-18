<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateChatifyMessagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ch_messages', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->bigInteger('from_id');
            $table->bigInteger('to_id')->default(1);
            $table->foreignId('departments_id')->nullable()->constrained('departments');
            $table->foreignId('priorities_id')->nullable()->constrained('priorities');
            $table->foreignId('statuses_id')->nullable()->constrained('statuses'); 
            $table->string('body',5000)->nullable();
            $table->string('attachment')->nullable();
            $table->boolean('seen')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ch_messages');
    }
}
