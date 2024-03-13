using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Promact.CustomerSuccess.Platform.Migrations
{
    /// <inheritdoc />
    public partial class updated : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ProjectDescription_Users_CreatorId",
                table: "ProjectDescription");

            migrationBuilder.DropForeignKey(
                name: "FK_ProjectDescription_Users_LastModifierId",
                table: "ProjectDescription");

            migrationBuilder.DropIndex(
                name: "IX_ProjectDescription_CreatorId",
                table: "ProjectDescription");

            migrationBuilder.DropIndex(
                name: "IX_ProjectDescription_LastModifierId",
                table: "ProjectDescription");

            migrationBuilder.DropColumn(
                name: "ConcurrencyStamp",
                table: "ProjectDescription");

            migrationBuilder.DropColumn(
                name: "ExtraProperties",
                table: "ProjectDescription");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ConcurrencyStamp",
                table: "ProjectDescription",
                type: "character varying(40)",
                maxLength: 40,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ExtraProperties",
                table: "ProjectDescription",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateIndex(
                name: "IX_ProjectDescription_CreatorId",
                table: "ProjectDescription",
                column: "CreatorId");

            migrationBuilder.CreateIndex(
                name: "IX_ProjectDescription_LastModifierId",
                table: "ProjectDescription",
                column: "LastModifierId");

            migrationBuilder.AddForeignKey(
                name: "FK_ProjectDescription_Users_CreatorId",
                table: "ProjectDescription",
                column: "CreatorId",
                principalTable: "Users",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_ProjectDescription_Users_LastModifierId",
                table: "ProjectDescription",
                column: "LastModifierId",
                principalTable: "Users",
                principalColumn: "Id");
        }
    }
}
