                using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Promact.CustomerSuccess.Platform.Migrations
{
    /// <inheritdoc />
    public partial class versionupdated : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "ProjectId",
                table: "VersionHistory",
                type: "uuid",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateIndex(
                name: "IX_VersionHistory_CreatorId",
                table: "VersionHistory",
                column: "CreatorId");

            migrationBuilder.CreateIndex(
                name: "IX_VersionHistory_LastModifierId",
                table: "VersionHistory",
                column: "LastModifierId");

            migrationBuilder.AddForeignKey(
                name: "FK_VersionHistory_Users_CreatorId",
                table: "VersionHistory",
                column: "CreatorId",
                principalTable: "Users",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_VersionHistory_Users_LastModifierId",
                table: "VersionHistory",
                column: "LastModifierId",
                principalTable: "Users",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_VersionHistory_Users_CreatorId",
                table: "VersionHistory");

            migrationBuilder.DropForeignKey(
                name: "FK_VersionHistory_Users_LastModifierId",
                table: "VersionHistory");

            migrationBuilder.DropIndex(
                name: "IX_VersionHistory_CreatorId",
                table: "VersionHistory");

            migrationBuilder.DropIndex(
                name: "IX_VersionHistory_LastModifierId",
                table: "VersionHistory");

            migrationBuilder.DropColumn(
                name: "ProjectId",
                table: "VersionHistory");
        }
    }
}
