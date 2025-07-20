"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { BookOpen, MessageSquare, Languages, HelpCircle, FileText, Loader2 } from "lucide-react"

const bibleBooks = [
  "Genesis",
  "Exodus",
  "Leviticus",
  "Numbers",
  "Deuteronomy",
  "Joshua",
  "Judges",
  "Ruth",
  "1 Samuel",
  "2 Samuel",
  "1 Kings",
  "2 Kings",
  "1 Chronicles",
  "2 Chronicles",
  "Ezra",
  "Nehemiah",
  "Esther",
  "Job",
  "Psalms",
  "Proverbs",
  "Ecclesiastes",
  "Song of Songs",
  "Isaiah",
  "Jeremiah",
  "Lamentations",
  "Ezekiel",
  "Daniel",
  "Hosea",
  "Joel",
  "Amos",
  "Obadiah",
  "Jonah",
  "Micah",
  "Nahum",
  "Habakkuk",
  "Zephaniah",
  "Haggai",
  "Zechariah",
  "Malachi",
  "Matthew",
  "Mark",
  "Luke",
  "John",
  "Acts",
  "Romans",
  "1 Corinthians",
  "2 Corinthians",
  "Galatians",
  "Ephesians",
  "Philippians",
  "Colossians",
  "1 Thessalonians",
  "2 Thessalonians",
  "1 Timothy",
  "2 Timothy",
  "Titus",
  "Philemon",
  "Hebrews",
  "James",
  "1 Peter",
  "2 Peter",
  "1 John",
  "2 John",
  "3 John",
  "Jude",
  "Revelation",
]

const commentaryTypes = [
  "Matthew Henry Commentary",
  "Barnes' Notes",
  "Jamieson-Fausset-Brown",
  "Adam Clarke Commentary",
  "Albert Barnes",
  "John Gill's Exposition",
  "Geneva Study Bible",
  "King James Bible Commentary",
]

const languages = [
  "English",
  "Spanish",
  "French",
  "German",
  "Italian",
  "Portuguese",
  "Russian",
  "Chinese",
  "Japanese",
  "Korean",
  "Arabic",
  "Hebrew",
  "Greek",
]

const scrapeTypes = [
  { id: "bibleproject", name: "Bible Project", icon: BookOpen, description: "Scrape Bible project content" },
  { id: "commentary", name: "Commentary", icon: MessageSquare, description: "Extract biblical commentaries" },
  { id: "languages", name: "Languages", icon: Languages, description: "Multi-language Bible content" },
  { id: "questions", name: "Questions", icon: HelpCircle, description: "Bible study questions" },
  { id: "summary", name: "Summary", icon: FileText, description: "Chapter and verse summaries" },
]

export default function BibleScrapingInterface() {
  const [selectedBook, setSelectedBook] = useState("")
  const [selectedChapter, setSelectedChapter] = useState("")
  const [selectedVerse, setSelectedVerse] = useState("")
  const [selectedCommentary, setSelectedCommentary] = useState("")
  const [selectedLanguage, setSelectedLanguage] = useState("")
  const [selectedScrapeType, setSelectedScrapeType] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [results, setResults] = useState("")

  const handleScrape = async () => {
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setResults(
        `Scraping results for ${selectedBook} ${selectedChapter}:${selectedVerse}\nType: ${selectedScrapeType}\nCommentary: ${selectedCommentary}\nLanguage: ${selectedLanguage}\n\nThis would contain the actual scraped content from Bible Hub...`,
      )
      setIsLoading(false)
    }, 2000)
  }

  const isFormValid = selectedBook && selectedChapter && selectedScrapeType

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-gray-900">Bible Hub Scraper</h1>
          <p className="text-lg text-gray-600">Extract biblical content, commentaries, and study materials</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Scripture Selection
              </CardTitle>
              <CardDescription>Choose the biblical passage you want to scrape</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="book">Bible Book</Label>
                <Select value={selectedBook} onValueChange={setSelectedBook}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a book" />
                  </SelectTrigger>
                  <SelectContent>
                    {bibleBooks.map((book) => (
                      <SelectItem key={book} value={book}>
                        {book}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="chapter">Chapter</Label>
                  <Select value={selectedChapter} onValueChange={setSelectedChapter}>
                    <SelectTrigger>
                      <SelectValue placeholder="Chapter" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 50 }, (_, i) => i + 1).map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="verse">Verse (Optional)</Label>
                  <Select value={selectedVerse} onValueChange={setSelectedVerse}>
                    <SelectTrigger>
                      <SelectValue placeholder="Verse" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All verses</SelectItem>
                      {Array.from({ length: 30 }, (_, i) => i + 1).map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Scraping Options</CardTitle>
              <CardDescription>Configure what type of content to extract</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="scrapeType">Scrape Type</Label>
                <Select value={selectedScrapeType} onValueChange={setSelectedScrapeType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select scrape type" />
                  </SelectTrigger>
                  <SelectContent>
                    {scrapeTypes.map((type) => (
                      <SelectItem key={type.id} value={type.id}>
                        <div className="flex items-center gap-2">
                          <type.icon className="h-4 w-4" />
                          {type.name}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="commentary">Commentary Type</Label>
                <Select value={selectedCommentary} onValueChange={setSelectedCommentary}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select commentary" />
                  </SelectTrigger>
                  <SelectContent>
                    {commentaryTypes.map((commentary) => (
                      <SelectItem key={commentary} value={commentary}>
                        {commentary}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="language">Language</Label>
                <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map((language) => (
                      <SelectItem key={language} value={language}>
                        {language}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Selected Configuration</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedBook && <Badge variant="secondary">Book: {selectedBook}</Badge>}
              {selectedChapter && <Badge variant="secondary">Chapter: {selectedChapter}</Badge>}
              {selectedVerse && <Badge variant="secondary">Verse: {selectedVerse}</Badge>}
              {selectedScrapeType && <Badge variant="secondary">Type: {selectedScrapeType}</Badge>}
              {selectedCommentary && <Badge variant="secondary">Commentary: {selectedCommentary}</Badge>}
              {selectedLanguage && <Badge variant="secondary">Language: {selectedLanguage}</Badge>}
            </div>

            <Button onClick={handleScrape} disabled={!isFormValid || isLoading} className="w-full">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Scraping...
                </>
              ) : (
                "Start Scraping"
              )}
            </Button>
          </CardContent>
        </Card>

        {results && (
          <Card>
            <CardHeader>
              <CardTitle>Scraping Results</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                value={results}
                readOnly
                className="min-h-[200px] font-mono text-sm"
                placeholder="Results will appear here..."
              />
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
