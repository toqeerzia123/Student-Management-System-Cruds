using Microsoft.EntityFrameworkCore.Migrations;

namespace Tasks.Migrations
{
    public partial class addattribute : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<long>(
                name: "Marsk",
                table: "Courses",
                type: "bigint",
                nullable: false,
                defaultValue: 0L);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Marsk",
                table: "Courses");
        }
    }
}
